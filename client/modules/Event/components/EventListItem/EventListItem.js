import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

// Import Style
import styles from './EventListItem.css';

function EventListItem(props) {
  let nextDay = moment(props.event.scheduledDate).add(1, 'days').calendar()
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/games/${props.event.slug}-${props.event.cuid}`} >
          {props.event.eventName}
        </Link>
      </h3>
      <p className={styles['author-name']}>
      {' by '}
        <Link to={`/profile/${props.event.owner}`}>
          {props.event.ownerName}
        </Link>
      </p>
      <p className={styles['post-desc']}>{props.event.game}</p>
      <p className={styles['post-desc']}>{moment(nextDay).format('MMM Do YY')}</p>
      <p className={styles['post-desc']}>{props.event.scheduledTime}</p>
      <p className={styles['post-desc']}>{props.event.attendees.length}/{props.event.slots}</p>
      <p className={styles['post-desc']}>{props.event.notes}</p>
      <hr className={styles.divider} />
    </div>
  );
}

EventListItem.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    scheduledDate: PropTypes.string.isRequired,
    scheduledTime: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    slots: PropTypes.number.isRequired,
    ownerName: PropTypes.string.isRequired,
    attendees: PropTypes.array.required,
  }).isRequired,
  onDelete: PropTypes.func.isRequired, // Not In Use - Rob, will delete after testing.
};

export default EventListItem;
