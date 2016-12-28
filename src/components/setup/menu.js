import React from 'react';

const Menu = () => {

	const menuList = ['Vagrant Settings', 'Server Packages', 'Web Servers', 'Languages', 'Databases', 'Workers', 'Timezone'];

	return(
		<div className="settings-menu">
			<ul>
				{menuList.map(function(row, i) {
          return (
						<li key={i}><a href={'#' + row}>{row}</a></li>
          );
        })}
			</ul>
		</div>
  );
};

export default Menu;
