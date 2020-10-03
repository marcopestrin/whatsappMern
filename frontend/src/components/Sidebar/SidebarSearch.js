import React from 'react'
import './style.scss'

import SearchOutlined from "@material-ui/icons/SearchOutlined"

function SidebarSearch() {
    return (
        <div className="sidebar_search">
            <div className="sidebar_searchContainer">
                <SearchOutlined />
                <input placeholder="Search or start new chat" type="text" />
            </div>
        </div>
    )
}

export default SidebarSearch
