import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  Container, 
  IconContainer, 
  IconItem, 
  Nav, 
  NavItem, 
  NavItemContainer, 
  NavLogo 
} from './HeaderElements'
import ExternalLink from '../Global/ExternalLink'

const query = graphql`{
  wp {
    themeOptions {
      settings {
        socialmedia {
          link {
            title
            url
          }
          icons
        }
      }
    }
    generalSettings {
      title
    }
  }
  allWpMenu {
    edges {
      node {
        menuItems {
          nodes {
            label
            path
            id
          }
        }
      }
    }
  }
}`

const Header = () => {

const data = useStaticQuery(query)
const title = data.wp.generalSettings.title
const icons = data.wp.themeOptions.settings.socialmedia
const menu = data.allWpMenu.edges[0].node.menuItems.nodes

	return (
		<>
			<Container>
				<Nav>

          <NavLogo to="/">{title}</NavLogo>

          <NavItemContainer>
            {menu.map((item , index ) => {
              return (
                <NavItem key={index}>
                  <Link to={item.path}>{item.label}</Link>
                </NavItem>
              )
            })}
          </NavItemContainer>

          <IconContainer>
            {icons.map((item, index) => {
              return (
                <IconItem key={index}>
              
                  <ExternalLink to={item.link.url} title={item.link.title}>
                    <span className="sr-only">{item.link.title}</span>
                    <FontAwesomeIcon icon={['fab', item.icons]} size="4x" />
                  </ExternalLink>

                </IconItem>
              )
            })}
          </IconContainer>
            
				</Nav>
			</Container>
		</>
	)
}

export default Header;