import React, { useEffect, useState } from "react";
import axios from "axios";
import { parseCookies } from "nookies";
import baseUrl from "@/utils/baseUrl";
import LoadingSpinner from "@/utils/LoadingSpinner";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const INITIAL_VALUE = {
  lecture_name: "",
  lecture_file: "",
};

const UploadAssetForm = ({ courseId, onFetchAssets }) => {
  const { elarniv_users_token } = parseCookies();
  const [asset, setAsset] = useState(INITIAL_VALUE);
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    setAsset((prevState) => ({ ...prevState, courseId }));
  }, []);

  useEffect(() => {
    const isAsset = Object.values(asset).every((el) => Boolean(el));
    isAsset ? setDisabled(false) : setDisabled(true);
  }, [asset]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    let fileSize;
    if (name === "lecture_file") {
      fileSize = files[0].size / 1024 / 1024;
      if (fileSize > 100) {
        toast.error(
          "The file size greater than 100 MB. Make sure less than 100 MB.",
          {
            style: {
              border: "1px solid #ff0033",
              padding: "16px",
              color: "#ff0033",
            },
            iconTheme: {
              primary: "#ff0033",
              secondary: "#FFFAEE",
            },
          }
        );
        e.target.value = null;
        return;
      }
      setAsset((prevState) => ({
        ...prevState,
        lecture_file: files[0],
      }));
    } else {
      setAsset((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleAssetUpload = async () => {
    const file = asset.lecture_file;
    const chunkSize = 10 * 1024 * 1024; // Tamaño de cada fragmento en bytes (en este caso, 10MB)
    const chunks = Math.ceil(file.size / chunkSize); // Número total de fragmentos

    const assetUrls = [];

    // Subir cada fragmento por separado
    for (let i = 0; i < chunks; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, file.size);
      const chunk = file.slice(start, end);

      const data = new FormData();
      data.append("file", chunk);
      data.append("upload_preset", process.env.UPLOAD_PRESETS);
      data.append("cloud_name", process.env.CLOUD_NAME);

      let response = await axios.post(process.env.CLOUDINARY_ZIP_URL, data);
      const assetUrl = response.data.url.replace(/^http:\/\//i, "https://");
      assetUrls.push(assetUrl);
    }

    return assetUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let assetUrls = [];
      if (asset.lecture_file) {
        assetUrls = await handleAssetUpload();
      }

      const payloadData = {
        lecture_name: asset.lecture_name,
        lecture_files: assetUrls, // Cambiar a un array de URLs de fragmentos subidos
      };
      const url = `${baseUrl}/api/courses/course/assets/${courseId}`;
      const payloadHeader = {
        headers: { Authorization: elarniv_users_token },
      };

      const response = await axios.post(url, payloadData, payloadHeader);

      toast.success(response.data.message, {
        style: {
          border: "1px solid #4BB543",
          padding: "16px",
          color: "#4BB543",
        },
        iconTheme: {
          primary: "#4BB543",
          secondary: "#FFFAEE",
        },
      });

      onFetchAssets();

      setLoading(false);

      router.push(`/instructor/course/assets/${courseId}`);
    } catch (err) {
      // console.log(err.response.data);

      let message;
      if (err.response.data.error) {
        message = err.response.data.error.message;
      } else {
        message = err.response.data.message;
      }

      toast.error(message, {
        style: {
          border: "1px solid #ff0033",
          padding: "16px",
          color: "#ff0033",
        },
        iconTheme: {
          primary: "#ff0033",
          secondary: "#FFFAEE",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label fw-semibold">Lecture Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Lecture Title"
              name="lecture_name"
              value={asset.lecture_name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label fw-semibold">Select Asset/File</label>
            <input
              type="file"
              className="form-control file-control"
              name="lecture_file"
              onChange={handleChange}
              required={true}
            />
            <div className="form-text">
              Upload file size less than or equal 5MB!
            </div>
          </div>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="default-btn"
            disabled={loading || disabled}
          >
            Upload Asset <span></span>
            {loading && <LoadingSpinner />}
          </button>
        </div>
      </div>
    </form>
  );
};

export default UploadAssetForm;
