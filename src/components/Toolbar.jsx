function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          className={selected === filter ? 'active' : ''}
          onClick={() => onSelectFilter(filter)}
          key={filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
