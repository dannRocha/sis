import React from 'react';

import './style.css';

const redirectTabsEnable = children => {

	// eslint-disable-next-line no-unused-vars
	for(const elements of children)
		if(!!elements['props'].enable)
		{ 
			window.location.hash = `#${elements['props']['name']}`;
			break;
		}
}

const Tabs = ({children : name, className: _className}) => 
(
    <nav>
        {
			name.map(value=> (
                <a 
					key = {value.name} 
					href={`#${value.name}`} 
					className={`tabs ${_className || ''}`} 
				> 
					{value.text}
				</a>
                )
            )
		}
    </nav>
);

const ViewTabs = ({children, className}) =>{
	if(!Array.isArray(children))
		children = [children];
	
	redirectTabsEnable(children);
	
	return (
		children
			.map((data, index) => (
				<section
					className = {`tab-view ${ className || '' }`}	
					id={`${data.props.name}`}		
					key = {(`${index}-${data.name}`)}  
					
				>
					{children[index]}
				
				</section>
			))
		);
}

export {Tabs, ViewTabs};
