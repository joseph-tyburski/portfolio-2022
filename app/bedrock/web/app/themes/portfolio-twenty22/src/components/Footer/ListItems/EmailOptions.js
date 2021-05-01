import React, { useState, useEffect } from 'react'
import { ListItem, PopOver, Button } from '../FooterElements'
import copy from "copy-to-clipboard"; 
import useHover from '../../../hooks/useHover';
import { useThemeOptions } from '../../../hooks/useThemeOptions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function EmailOptions () {
	const { themeOptions } = useThemeOptions()
	const { settings } = themeOptions
	const { emailaddress } = settings

	// Popover
	const [hoverRef, isHovered] = useHover();

	// useEffect(() => {
	// 	isHovered.current = gsap.to(hoverRef.current, {
	// 		duration: .3,
	// 		opacity: 0.5,
	// 		paused: true
	// 	});
	// }, []);

	// Copy to Clipboard
	const [buttonText, setButtonText] = useState('Copy as Text');

	useEffect(() => {
		let timer = setTimeout(() => setButtonText('Copy as Text'), 1500);
		return () => {
			clearTimeout(timer);
		}
	});
  
	const handleCopyEmail = (e) => {
		setButtonText(e.target.value);
	} 
	
	const copyToClipboard = () => {
		copy(emailaddress);
		setButtonText('Copied!');
	}

  return (
    <ListItem hasOptions key="0" ref={ hoverRef }>
			<span>Email</span>
			
			{isHovered && (
				<PopOver>
					<input onChange={ handleCopyEmail } className="hidden" />
					
					<Button onClick={ copyToClipboard } aria-live="polite">
						<FontAwesomeIcon icon={['fas', 'clone']} /> { buttonText }
					</Button>
					
					<a href={ 'mailto:${emailaddress}?subject=Hello Joe' }>
						<FontAwesomeIcon icon={['fas', 'envelope-open-text']} /> Open in Mail App
					</a>
				</PopOver>
			)}
    </ListItem>
  )
	
}