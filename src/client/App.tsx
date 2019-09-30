import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { css } from '@emotion/core'
import { animated, useSpring } from '@react-spring/web'

type Translate3dT = (...coords: [number, number?, number?]) => string
const translate3d: Translate3dT = (...[x, y, z]) =>
	`translate3d(${x || 0}px, ${y || 0}px, ${z || 0}px)`

const getCoord = (axis: 'x' | 'y') =>
	(Math.random() - 0.5) * (window[axis === 'x' ? 'innerWidth' : 'innerHeight'] * 0.7)

const App = withRouter(({ location: { pathname } }) => {
	const [spring, set] = useSpring(() => ({
		to: { transform: translate3d(0, -200) },
		config: { tension: 400, friction: 12 },
	}))
	useEffect(() => {
		set({ transform: translate3d(0, 0) })
	}, [set])
	return (
		<div
			css={css`
				display: grid;
				height: 100%;
			`}
			onClick={() => set({ transform: translate3d(getCoord('x'), getCoord('y')) })}
		>
			<animated.div
				css={css`
					margin: auto;
				`}
			>
				<animated.p style={spring}>{`SSR PRESET \n route: ${pathname}`}</animated.p>
			</animated.div>
		</div>
	)
})

export default App
