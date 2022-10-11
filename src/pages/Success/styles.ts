import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 102px;
`

export const Title = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-dark']};

    margin-bottom: 0.25rem;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 2.5rem;
  }
`

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 2.5rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 6px 36px;
  border-color: ${(props) => props.theme.purple};
`

export const OrderInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`

const CIRCLE_COLORS = {
  yellow: 'yellow',
  dark_yellow: 'yellow-dark',
  purple: 'purple',
} as const

interface CircleProps {
  circleColor: keyof typeof CIRCLE_COLORS
}

export const Circle = styled.div<CircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background: ${(props) => props.theme[CIRCLE_COLORS[props.circleColor]]};
`
