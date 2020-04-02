import React                      from 'react';
import {useHistory}               from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import './styles.css';
import {PageHeader}               from "antd";


function AppBreadcrumb()
{
    const application = useSelector(state => state.application);
    const dispatch    = useDispatch();
    const history     = useHistory();
    const menu        = application.menu;

    return (
        <PageHeader
            className="page-header-body"
            title="Title"
            subTitle="This is a subtitle"
        />
    );
}

export default AppBreadcrumb;