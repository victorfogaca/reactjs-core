import React, {useState}          from 'react';
import {Link, useHistory}         from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {LogoutOutlined, InfoCircleOutlined, SettingOutlined, NotificationOutlined} from '@ant-design/icons';
import {Avatar, Button, Layout, Menu, Popover, Tooltip}                            from "antd";
import allActions                                                                  from "../../../reducers/actions";
import {System}                                                                    from "../../../configs/System";
import './styles.css';

const {Header}  = Layout;
const {SubMenu} = Menu;

function AppHeader()
{
    const [rotateSettings, setRotateSettings] = useState(false);
    const application                         = useSelector(state => state.application);
    const dispatch                            = useDispatch();
    const history                             = useHistory();
    const menu                                = application.menu;
    const acesso                              = application.access;

    function logoutSystem()
    {
        dispatch(allActions.ApplicationActions.logOut());
        history.push('/');
    }

    function jumpTo(route)
    {
        history.push(route.link);
    }


    return (
        <Header className="header">

            <Link to={'/home'}><img src={System.core.logo.header}/></Link>
            <Menu theme="dark" mode="horizontal" className={"top-menu"}>
                <SubMenu key="w" title={<span><NotificationOutlined/><span>Administrador</span></span>}>
                    <Menu.Item key="1">Usuários</Menu.Item>
                    <Menu.Item key="2">Grupo de acesso</Menu.Item>
                    <Menu.Item key="3">Log de acesso</Menu.Item>
                </SubMenu>
                <Menu.Item key="4" onClick={() => history.push('/core/modules')}>Módulos</Menu.Item>
            </Menu>

            <Popover className={"header-right-menu-options"}
                     content={
                         <>
                             <div className="d-flex flex-row"
                                  style={{padding : 15, lineHeight : '20px', minWidth : 350}}>
                                 <Avatar
                                     style={{marginRight : 15}}
                                     src={"/img/user-avatar-dark.png"}
                                     alt={`Perfil`}
                                     className='avatar-sidebar-component'
                                     size={"large"}
                                 />

                                 <div>
                                     <strong>{acesso?.pessoa.nome}</strong><br/>
                                     {System.saas.name}
                                 </div>

                             </div>

                             <Menu selectedKeys={[0]} style={{borderRight : 0}}>
                                 <Menu.Divider/>
                                 <Menu.Item key="1" onClick={() =>
                                 {
                                 }}><InfoCircleOutlined/> Meu Perfil</Menu.Item>
                                 <Menu.Item key="5" onClick={logoutSystem}><LogoutOutlined/> Sair</Menu.Item>
                             </Menu>
                         </>
                     }
                     trigger="click"
                     placement="bottomRight"
                     overlayClassName="popover-mobile"
            >
                <Tooltip title="Informações e ações do usuário logado" placement="left">
                    <div>
                        <Button type="link" onMouseOver={() => setRotateSettings(true)}
                                onMouseOut={() => setRotateSettings(false)} icon={<SettingOutlined spin={rotateSettings}
                                                                                                   style={{fontSize : '32px', color : '#fff'}}/>}/>
                    </div>
                </Tooltip>

            </Popover>


        </Header>
    );
}

export default AppHeader;
