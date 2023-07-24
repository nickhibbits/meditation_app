const numbers = Array.from({ length: 60 }, (_, index) => index + 1);

function DurationSelector() {
  return (
    <select>
      {[...numbers].map((number) => {
        return <option>{number}</option>;
      })}
    </select>
  );
}

export default DurationSelector;
