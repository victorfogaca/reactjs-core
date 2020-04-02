import React, {useState} from 'react';
import {useHistory}      from "react-router-dom";
import cogoToast         from 'cogo-toast';
import API               from "../../services/API";
import {System}          from '../../configs/System';
import allActions        from "../../reducers/actions";
import {useDispatch}     from "react-redux";
import './styles.css';

import {Form, Input, Button, Checkbox, Row, Col, Spin} from 'antd';
import {UserOutlined, LockOutlined}                    from '@ant-design/icons';
import LayoutLogin                                     from "../../components/UI/AppLayout/LayoutLogin";

function Logon()
{
    const [loading, setLoading] = useState(false);
    const history               = useHistory();
    const dispatch              = useDispatch();


    async function handleLogin(values)
    {
        try
        {
            setLoading(true);
            const response = await new API("acesso/sign-in").post(values);
            setLoading(false);
            if (response.HTTPStatus === 200 && response.userIdentified === true)
            {

                // const menu = [
                //     {
                //         id : 1,
                //         title : 'Home',
                //         icone : null,
                //         link : '/home',
                //         children : []
                //     },
                //     {
                //         id : 2,
                //         title : 'Link',
                //         icone : null,
                //         link : '/page2',
                //         children : []
                //     },
                //     {
                //         id : 3,
                //         title : 'Opções ADM',
                //         icone : null,
                //         link : null,
                //         children : [
                //             {
                //                 id : 4,
                //                 title : 'Usuários',
                //                 icone : null,
                //                 link : '/usuarios',
                //                 children : []
                //             },
                //             {
                //                 id : 5,
                //                 title : 'Grupo de acesso',
                //                 icone : null,
                //                 link : '/grupo-acesso',
                //                 children : []
                //             },
                //             {
                //                 id : 6,
                //                 title : 'Log de acessos',
                //                 icone : null,
                //                 link : '/logs-acesso',
                //                 children : [{
                //                     id : 8,
                //                     title : 'Modulos',
                //                     icone : null,
                //                     link : '/modulos',
                //                     children : []
                //                 },]
                //             },
                //             {
                //                 id : 7,
                //                 title : 'Outras opções',
                //                 icone : null,
                //                 link : '/outras',
                //                 children : []
                //             },
                //         ]
                //     },
                // ];
                //dispatch(allActions.ApplicationActions.setMenu(response.object.access.menu));
                dispatch(allActions.ApplicationActions.setAccess(response.object));
                localStorage.setItem(System.core.storageKey, JSON.stringify(response.object));
                history.push('home');
            }
            else
            {
                cogoToast.error(response.message);
            }
        }
        catch (e)
        {
            setLoading(false);
            cogoToast.error('Falha ao logar ' + e);
        }

    }

    return (
        <LayoutLogin className="logon-container">


            <Form
                name="normal_login"
                className="login-form"
                initialValues={{remember : true, login : 'victorff@gmail.com', senha : '123456'}}
                onFinish={handleLogin}
                size={"large"}
            >
                <div style={{textAlign : 'center', paddingBottom : 40, paddingTop : 20}}><img
                    src={System.core.logo.login} width={300} alt=""/></div>

                <Spin tip="Verificando credenciais..." spinning={loading}>
                    <Form.Item
                        name="login"
                        rules={
                            [
                                {required : true, message : 'Digite seu login'},
                                {type : 'email', message : 'E-mail inválido'},
                            ]}
                    >
                        <Input type={"email"} prefix={<UserOutlined className="site-form-item-icon"/>}
                               placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="senha"
                        rules={[{required : true, message : 'Digite sua senha'}]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Esqueci minha senha
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Acessar sistema
                        </Button>
                    </Form.Item>
                </Spin>

            </Form>

        </LayoutLogin>
    );
}

export default Logon;