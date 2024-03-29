import * as React from 'react';
import cn from 'classnames';

import cameraIcon from '../../../icons/camera.svg';
import youtubeIcon from '../../../icons/youtube.svg';
import dziuImage from '../../../images/bg-shapes/dziu.svg';

import styles from './VideoCard.module.css';

export const VideoCard: React.FC = () => {
	return (
		<a
			href='https://youtu.be/pTLDWFWWlnY'
			target='_blank'
			className={cn('videoCard', styles.videoCard)}>
			<div className={cn(styles.videoCV, 'gpu')}>
				<img src={cameraIcon} alt='camera' />
				Video CV
			</div>

			<img src={dziuImage} alt='Oleksii Dziubak' className={cn(styles.mainImage)} />

			<div className={cn(styles.videoControls, 'gpu')}>
				<div>
					<p className={cn(styles.videoName)}>About me</p>

					<div className={cn(styles.trackContainer)}>
						<div className={cn(styles.time)}>00:00</div>
						<div className={cn(styles.track)}> </div>

						<div className={cn(styles.time)}>00:30</div>
					</div>
				</div>

				<img src={youtubeIcon} alt='youtube' width='57px' height='40px' />
			</div>
		</a>
	);
};
