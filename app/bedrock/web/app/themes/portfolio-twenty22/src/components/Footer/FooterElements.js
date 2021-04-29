import styled from 'styled-components'
import tw, {css} from 'twin.macro'
import ExternalLink from '../Global/ExternalLink';

// Global
export const Container = styled.footer`
  ${tw`w-full mt-60`}
`;

export const Row = styled.section`
  ${tw`flex justify-end`}
`;


// First Section
export const Title = styled.h3`
  ${tw`w-5/12 -mb-12 font-black tracking-wide uppercase leading-less text-10xl font-condensed`}
`;

export const List = styled.ul`
  ${tw`flex flex-col items-start justify-end w-4/12`}
`;

export const ListItem = styled.li`
  ${tw`font-bold font-sans line-height[1.15] overflow-hidden text-6xl`}
  
  ${({ hasOptions }) => hasOptions && css`
    ${tw`perspective[600] perspective-origin[50%] w-full`}
    
    > span {
      ${tw`block cursor-pointer origin-center-top relative transform-style[preserve-3d] transition-all motion-safe:duration-500 motion-reduce:duration-75 ease`}
    }

    &:hover {
      > span {
        ${tw`color[transparent] transform[translate3d(0, 0, -60px) rotateX(90deg)]`}
      }
      
      div {
        ${tw`transform[translate3d(0, 0, 0) rotateX(0deg)]`}
      }
    }

    div {
      ${tw`absolute block left-0 origin-center-top top-0 transform[translate3d(0, 105%, 0) rotateX(-90deg)] transition-all motion-safe:duration-500 motion-reduce:duration-75 ease`}
  
      span {
        ${tw`mx-2`}
      }
  
      *:not(span) {
        ${tw`transition-all motion-safe:duration-300 motion-reduce:duration-75 ease`}
        
        &:hover {
          ${tw`text-mustard`}
        }
      }
    }
  `}
`;

export const ListLink = styled(ExternalLink)`
  ${tw`perspective[600] perspective-origin[50%]`}

  &:hover span {
    ${tw`color[transparent] transform[translate3d(0, 0, -60px) rotateX(90deg)]`}
  }

  span {
    ${tw`
      block origin-center-top relative transform-style[preserve-3d] transition-all motion-safe:duration-500 motion-reduce:duration-75 ease
      
      after:(
        absolute block content[attr(data-title)] left-0 origin-center-top top-0 text-mustard transform[translate3d(0, 105%, 0) rotateX(-90deg)]
      )
    `}
  }
`;

export const Button = styled.button`
  ${tw`font-bold`}
`;


// Second Section
export const Colophon = styled.div`
  ${tw`
    leading-relaxed pb-16 pt-24 relative text-grey text-xs w-4/12
    
    before:(
      absolute border-grey border-solid border-t empty-content h-px left[-16.666vw] top[calc(50% + 10px)] width[8.333vw]
    )
  `}
`;

export const Widget = styled.div`
  ${tw`flex justify-end leading-normal margin-right[8.333vw] pb-16 pt-24 text-grey text-xs w-2/12`}
`;