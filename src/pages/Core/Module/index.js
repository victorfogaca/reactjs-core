import React, {useState}                                                  from 'react';
import {useHistory}                                                       from "react-router-dom";
import {useDispatch}                                                      from "react-redux";
import {Button, Layout, PageHeader, Tooltip, Tree}                        from 'antd';
import {DeleteOutlined, DownOutlined, PlusCircleOutlined, SearchOutlined} from '@ant-design/icons';
import AppMenu                                                            from "../../../components/UI/AppMenu";
import LayoutDefault                                                      from "../../../components/UI/AppLayout/LayoutDefault";
import './styles.css';

const {TreeNode} = Tree;
const {Content}  = Layout;

function Module()
{
    const [loading, setLoading] = useState(false);
    const history               = useHistory();
    const dispatch              = useDispatch();

    function onSelect(selectedKeys, info)
    {
        console.log('selected', selectedKeys, info);
    };

    function onDrop(event, node, dragNode, dragNodesKeys)
    {
        console.log('event', event);
        console.log('node', node);
        console.log('dragNode', dragNode);
        console.log('dragNodesKeys', dragNodesKeys);
    };

    function onDragLeave(event, node)
    {
        console.log('event', event);
        console.log('node', node);
    };

    return (
        <LayoutDefault
            pageHeader=
                {
                    <PageHeader
                        className="page-header-body"
                        backIcon={false}
                        onBack={() => null}
                        title="Módulos do sistema"
                        subTitle="Gestão core de móduloe e end-points do sistema"
                        extra={
                            [
                                <Button primary icon={<PlusCircleOutlined/>}/>,
                                <Button danger icon={<DeleteOutlined/>}/>,
                                <Tooltip title="Filtrar listagem">
                                    <Button shape="circle" icon={<SearchOutlined/>}/>
                                </Tooltip>,
                            ]}
                    />
                }
        >


            <AppMenu/>
            <Content className={"main-content-system"}>
                <Tree
                    showLine
                    draggable
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    switcherIcon={<DownOutlined/>}
                    defaultExpandedKeys={['0-0-0']}
                    onSelect={onSelect}
                >
                    <TreeNode title="parent 1" key="0-0">
                        <TreeNode title="parent 1-0" key="0-0-0">
                            <TreeNode title="leaf" key="0-0-0-0"/>
                            <TreeNode title="leaf" key="0-0-0-1"/>
                            <TreeNode title="leaf" key="0-0-0-2"/>
                        </TreeNode>
                        <TreeNode title="parent 1-1" key="0-0-1">
                            <TreeNode title="leaf" key="0-0-1-0"/>
                        </TreeNode>
                        <TreeNode title="parent 1-2" key="0-0-2">
                            <TreeNode title="leaf" key="0-0-2-0"/>
                            <TreeNode title="leaf" key="0-0-2-1"/>
                        </TreeNode>
                    </TreeNode>
                </Tree>
            </Content>
        </LayoutDefault>
    );
}

export default Module;