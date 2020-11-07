import React from "react";
import {
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SideBtnWrap,
    Icon,
    ClosedIcon
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle})=>{
    return (
        <SidebarContainer isOpen = {isOpen}>
            <Icon  onClick = {toggle} >
                <ClosedIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to = "/">Pizzas</SidebarLink>
                <SidebarLink to = "/">Deserts</SidebarLink>
                <SidebarLink to = "/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to = "/">Order Now</SidebarRoute>
            </SideBtnWrap>
            
        </SidebarContainer>
    )
}

export default Sidebar;