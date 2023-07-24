const numbers = Array.from({ length: 60 }, (_, index) => index + 1);

function DurationSelector({ update }: { update: (value: any) => void }) {
  return (
    <select onChange={(e) => update(e.target.value)}>
      {[...numbers].map((number, i) => {
        return (
          <option key={i} value={number}>
            {number}
          </option>
        );
      })}
    </select>
  );
}

export default DurationSelector;
