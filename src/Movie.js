import { PropTypes } from 'prop-types';

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <div>{summary}</div>
      <ul>{genres ? genres.map((g) => <li key={g}>{g}</li>) : null}</ul>
    </div>
  );
}

Movie.propTypes = {
  // coverImg: PropTypes.string,
};

export default Movie;
