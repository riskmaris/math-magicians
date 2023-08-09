function result({ answer }) {
  return (
    <div>
      <div className="input-filed">
        {answer.total}
        {' '}
        {answer.operation}
        {' '}
        {answer.next}
      </div>
    </div>
  );
}

export default result;
