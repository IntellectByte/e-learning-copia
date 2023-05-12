import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import Select from "react-dropdown-select";
import LoadingSpinner from "@/utils/LoadingSpinner";
import toast from "react-hot-toast";

const StudentsRaw = ({
  id,
  first_name,
  last_name,
  email,
  phone,
  bio,
  email_confirmed,
  role,
  onAdmin = null,
  course,
}) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get(`${baseUrl}/api/get-courses-recommend`);
      const data = response.data;
      setCourses(data.courses);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  const dropdownOptions = courses.map((course) => ({
    value: course.id,
    label: course.title,
  }));

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${baseUrl}/api/admin/manage-user-courses`,
        {
          userId: id,
          courses: selectedOptions,
        }
      );
      setLoading(false);
      toast.success("Enroled successfully.")
    } catch (err) {
      let {
        response: {
          data: { message },
        },
      } = err;
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
      setLoading(false);
    }
  };

  return (
    <tr>
      <td>{`${first_name} ${last_name}`}</td>
      <td>{email}</td>
      <td>{phone ? phone : "N/A"}</td>
      <td>{email_confirmed ? "Yes" : "No"}</td>
      {/* <td>
                <div className='max-300px max-height-60'>
                    {bio ? bio : 'N/A'}
                </div>
            </td> */}
      <td>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Select
              options={dropdownOptions}
              value={selectedOptions}
              multi
              onChange={handleSelectChange}
              closeMenuOnSelect={false}
              clearable={false}
            />
          )}
        </div>
      </td>
      <td>
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#CE4F88",
            border: "none",
            color: "white",
            padding: "10px 20px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "13px",
            margin: "4px 2px",
            cursor: "pointer",
            borderRadius: "20px",
            height: "40px",
          }}
        >
          {!loading ? <div>Apply</div> : <LoadingSpinner />}
        </button>
      </td>
    </tr>
  );
};

export default StudentsRaw;