import React                                from 'react';
import {useHistory}                         from "react-router-dom";
import {useSelector}                        from 'react-redux';
import {UserOutlined, NotificationOutlined} from '@ant-design/icons';
import {Layout, Menu}                       from "antd";
import './styles.css';

const {SubMenu} = Menu;
const {Sider}   = Layout;

function AppMenu()
{
    const application = useSelector(state => state.application);
    const history     = useHistory();
    const menu        = application.menu;

    function jumpTo(route)
    {
        history.push(route.link);
    }

    return (
        <Sider theme={"light"} className="site-layout-background" breakpoint={"lg"} width={200}>
            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{height : '100%'}}>
                {
                    menu.map(m =>
                        (
                            m.children.length === 0 ?
                                <Menu.Item key={m.id} onClick={() => jumpTo(m)}>{m.title}</Menu.Item>
                                :
                                <SubMenu key={m.id} title={<span><UserOutlined/><span>{m.title}</span></span>}>
                                    {
                                        m.children.map(m2 =>
                                            (
                                                m2.children.length === 0 ?
                                                    <Menu.Item key={m2.id}
                                                               onClick={() => jumpTo(m2)}>{m2.title}</Menu.Item>
                                                    :
                                                    <SubMenu key={m2.id} title={
                                                        <span><NotificationOutlined/><span>{m2.title}</span></span>}>
                                                        {
                                                            m2.children.map(m3 => (<Menu.Item key={m3.id}
                                                                                              onClick={() => jumpTo(m3)}>{m3.title}</Menu.Item>))
                                                        }
                                                    </SubMenu>
                                            ))
                                    }
                                </SubMenu>
                        ))
                }
            </Menu>
        </Sider>
    );
}

export default AppMenu;
