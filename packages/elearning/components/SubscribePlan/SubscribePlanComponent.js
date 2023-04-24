import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pricing } from 'react-pricing';
import styles from './SubscribePlanComponent.module.css';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const SubscribePlanComponent = () => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = React.useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const subscribePlan1 = () => {
        const planObj = {
            id: '1',
            title: 'Plano de Assinatura BÁSICO',
            slug: 'picol-para-todos-como-inovar-no-mercado-de-picols',
            price: 3.999,
            image: 'https://res.cloudinary.com/dnunzwnex/image/upload/v1681935323/sraiyjbchapm2j1qj6at.jpg',
            duration: 'Assinatura de 1 año',
            quantity: 1,
            hotmartId: 'bwwp449q',
            instructor: "Francisco Sant'Ana",
            discount: 0,
            type: 'sub',
        };

        dispatch({
            type: 'RESET_CART',
        });

        dispatch({
            type: 'ADD_TO_CART',
            data: planObj,
        });

        router.push('/checkout');
    };

    const subscribePlan2 = () => {
        const planObj = {
            id: '2',
            title: 'Plano de Assinatura Baunilha',
            slug: 'picol-para-todos-como-inovar-no-mercado-de-picols',
            price: 4.999,
            image: 'https://res.cloudinary.com/dnunzwnex/image/upload/v1681935323/wciqvy7atnoxeo0sib9v.jpg',
            duration: 'Assinatura de 1 año',
            quantity: 1,
            hotmartId: 'bwwp449q',
            instructor: "Francisco Sant'Ana",
            discount: 0,
            type: 'sub',
        };

        dispatch({
            type: 'RESET_CART',
        });

        dispatch({
            type: 'ADD_TO_CART',
            data: planObj,
        });

        router.push('/checkout');
    };

    const subscribePlan3 = () => {
        const planObj = {
            id: '3',
            title: 'Plano de Assinatura Pistache',
            slug: 'picol-para-todos-como-inovar-no-mercado-de-picols',
            price: 5.999,
            image: 'https://res.cloudinary.com/dnunzwnex/image/upload/v1681935323/rvp8oa1xkg2zx65qouud.jpg',
            duration: 'Assinatura de 1 año',
            quantity: 1,
            hotmartId: 'bwwp449q',
            instructor: "Francisco Sant'Ana",
            discount: 0,
            type: 'sub',
        };

        dispatch({
            type: 'RESET_CART',
        });

        dispatch({
            type: 'ADD_TO_CART',
            data: planObj,
        });

        router.push('/checkout');
    };

    const alreadySubscribe = cartItems.some((item) => {
        return item.slug === 'subscription-plan';
    });

    return (
        <>
            {isMounted && (
                <div className={styles['main-component-background']}>
                    <div className={styles.wrapper}>
                        <h2>
                            {t('subcomponent-h2', {
                                defaultValue: 'Subscribe to our plans',
                            })}
                            <br />
                        </h2>
                        <br />

                        <div className={styles['pricing-table']}>
                            <Pricing
                                data={[
                                    {
                                        text: 'Aulas gravadas',
                                        value: true,
                                    },
                                    { text: 'Receita do mês', value: true },
                                    {
                                        text: 'ACESSO À COMUNIDADE',
                                        value: true,
                                    },
                                    {
                                        text: 'MATERIAL DE APOIO',
                                        value: true,
                                    },
                                    {
                                        text: 'Certificado digital',
                                        value: true,
                                    },
                                    {
                                        text: 'Aulas práticas gravadas',
                                        value: false,
                                    },
                                    {
                                        text: 'Desconto na loja online',
                                        value: false,
                                    },
                                    {
                                        text: 'Eventos com descontos exclusivos',
                                        value: false,
                                    },
                                    {
                                        text: 'Cursos Transmitidos',
                                        value: false,
                                    },
                                    {
                                        text: 'Aulas práticas ao vivo',
                                        value: false,
                                    },
                                    {
                                        text: 'Mentoria com Francisco (1h)',
                                        value: false,
                                    },
                                    {
                                        text: 'Uma aula prática na escola (opcional)*',
                                        value: false,
                                    },
                                    {
                                        text: 'Grupo de ex-alunos do LinkedIn',
                                        value: false,
                                    },
                                    {
                                        text: 'Cerimônia de formatura com diploma físico',
                                        value: false,
                                    },
                                ]}
                                price='3.999'
                                duration='y'
                                background='linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)'
                                shadow='#F5BCD7'
                                currency='R$'
                                buttonContent={
                                    alreadySubscribe ? (
                                        <a
                                            onClick={() =>
                                                router.push('/checkout')
                                            }
                                        >
                                            {t(
                                                'subcomponent-already-subscribe',
                                                {
                                                    defaultValue:
                                                        'View My Subscription',
                                                }
                                            )}
                                        </a>
                                    ) : (
                                        <a onClick={subscribePlan1}>
                                            {t('subcomponent-subscribe-btn', {
                                                defaultValue: 'INSCREVER',
                                            })}
                                        </a>
                                    )
                                }
                                priceText='Disponível em prestações'
                                headerText='Plano Baunilha'
                            />

                            <Pricing
                                data={[
                                    {
                                        text: 'Aulas gravadas',
                                        value: true,
                                    },
                                    { text: 'Receita do mês', value: true },
                                    {
                                        text: 'ACESSO À COMUNIDADE',
                                        value: true,
                                    },
                                    {
                                        text: 'MATERIAL DE APOIO',
                                        value: true,
                                    },
                                    {
                                        text: 'Certificado digital',
                                        value: true,
                                    },
                                    {
                                        text: 'Aulas práticas gravadas',
                                        value: true,
                                    },
                                    {
                                        text: 'Desconto na loja online',
                                        value: true,
                                    },
                                    {
                                        text: 'Eventos com descontos exclusivos',
                                        value: true,
                                    },
                                    {
                                        text: 'Cursos Transmitidos',
                                        value: false,
                                    },
                                    {
                                        text: 'Aulas práticas ao vivo',
                                        value: false,
                                    },
                                    {
                                        text: 'Mentoria com Francisco (1h)',
                                        value: false,
                                    },
                                    {
                                        text: 'Uma aula prática na escola (opcional)*',
                                        value: false,
                                    },
                                    {
                                        text: 'Grupo de ex-alunos do LinkedIn',
                                        value: false,
                                    },
                                    {
                                        text: 'Cerimônia de formatura com diploma físico',
                                        value: false,
                                    },
                                ]}
                                price='4.999'
                                duration='y'
                                background='linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)'
                                shadow='#F5BCD7'
                                currency='R$'
                                buttonContent={
                                    alreadySubscribe ? (
                                        <a
                                            onClick={() =>
                                                router.push('/checkout')
                                            }
                                        >
                                            {t(
                                                'subcomponent-already-subscribe',
                                                {
                                                    defaultValue:
                                                        'View My Subscription',
                                                }
                                            )}
                                        </a>
                                    ) : (
                                        <a onClick={subscribePlan2}>
                                            {t('subcomponent-subscribe-btn', {
                                                defaultValue: 'INSCREVER',
                                            })}
                                        </a>
                                    )
                                }
                                priceText='Disponível em prestações'
                                headerText='Plano Chocolate'
                            />

                            <Pricing
                                data={[
                                    {
                                        text: 'Aulas gravadas',
                                        value: true,
                                    },
                                    { text: 'Receita do mês', value: true },
                                    {
                                        text: 'ACESSO À COMUNIDADE',
                                        value: true,
                                    },
                                    {
                                        text: 'MATERIAL DE APOIO',
                                        value: true,
                                    },
                                    {
                                        text: 'Certificado digital',
                                        value: true,
                                    },
                                    {
                                        text: 'Aulas práticas gravadas',
                                        value: true,
                                    },
                                    {
                                        text: 'Desconto na loja online',
                                        value: true,
                                    },
                                    {
                                        text: 'Eventos com descontos exclusivos',
                                        value: true,
                                    },
                                    {
                                        text: 'Cursos Transmitidos',
                                        value: true,
                                    },
                                    {
                                        text: 'Aulas práticas ao vivo',
                                        value: true,
                                    },
                                    {
                                        text: 'Mentoria com Francisco (1h)',
                                        value: true,
                                    },
                                    {
                                        text: 'Uma aula prática na escola (opcional)*',
                                        value: true,
                                    },
                                    {
                                        text: 'Grupo de ex-alunos do LinkedIn',
                                        value: true,
                                    },
                                    {
                                        text: 'Cerimônia de formatura com diploma físico',
                                        value: true,
                                    },
                                ]}
                                price='5.999'
                                duration='y'
                                background='linear-gradient(68.6deg, rgb(252, 165, 241) 1.8%, rgb(181, 255, 255) 100.5%)'
                                shadow='#F5BCD7'
                                currency='R$'
                                buttonContent={
                                    alreadySubscribe ? (
                                        <a
                                            onClick={() =>
                                                router.push('/checkout')
                                            }
                                        >
                                            {t(
                                                'subcomponent-already-subscribe',
                                                {
                                                    defaultValue:
                                                        'View My Subscription',
                                                }
                                            )}
                                        </a>
                                    ) : (
                                        <a onClick={subscribePlan3}>
                                            {t('subcomponent-subscribe-btn', {
                                                defaultValue: 'INSCREVER',
                                            })}
                                        </a>
                                    )
                                }
                                priceText='Disponível em prestações'
                                headerText='Plano Pistache'
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SubscribePlanComponent;
