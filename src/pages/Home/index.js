import React, {useState}                                    from 'react';
import {useHistory}                                         from "react-router-dom";
import {useDispatch}                                        from "react-redux";
import {Button, Layout, PageHeader, Tooltip, Tree}          from 'antd';
import {SearchOutlined, DeleteOutlined, PlusCircleOutlined} from '@ant-design/icons';


import AppMenu       from "../../components/UI/AppMenu";
import './styles.css';
import LayoutDefault from "../../components/UI/AppLayout/LayoutDefault";

const {TreeNode} = Tree;
const {Content}  = Layout;

function Home()
{
    const [loading, setLoading] = useState(false);
    const history               = useHistory();
    const dispatch              = useDispatch();

    function onSelect(selectedKeys, info)
    {
        console.log('selected', selectedKeys, info);
    };

    return (
        <LayoutDefault
            pageHeader=
                {
                    <PageHeader
                        className="page-header-body"
                        backIcon={false}
                        onBack={() => null}
                        title="Dashboard"
                        subTitle="Dashboard do sistema"
                    />
                }
        >
            <AppMenu/>
            <Content className={"main-content-system"}>
                asdasdasd
            </Content>
        </LayoutDefault>
    );
}

export default Home;