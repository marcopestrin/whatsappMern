import React from 'react'
import './style.scss'

import SidebarHeader from './SidebarHeader'
import SidebarSerach from './SidebarSearch'
import SidebarChats from './SidebarChats'

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarHeader />
            <SidebarSerach />
            <SidebarChats />
        </div>
    )
}

export default Sidebar
