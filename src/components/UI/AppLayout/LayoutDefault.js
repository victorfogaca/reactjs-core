import React         from 'react';
import {Layout}      from "antd";
import AppHeader     from "../AppHeader";
import AppFooter     from "../AppFooter";
import AppBreadcrumb from "../AppBreadcrumb";

const {Content} = Layout;

export default function LayoutDefault(props)
{
    return (
        <Layout>
            <AppHeader/>
            <Content style={{padding : '0 50px'}}>
                {props.pageHeader}
                <Layout className={"main-wide-content-system"}>
                {props.children}
                </Layout>
            </Content>
            <AppFooter/>
        </Layout>
    );
}