import React         from 'react';
import {Layout}      from "antd";

const {Content} = Layout;

export default function LayoutLogin(props)
{
    return (
        <Layout>
            <Content style={{padding : '0 50px'}}>
                <Layout className={[props.className]}>
                    {props.children}
                </Layout>
            </Content>
        </Layout>
    );
}