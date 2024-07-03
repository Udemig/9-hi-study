const Price = ({ data }) => {
  return (
    <p className="text-xl font-semibold">
      ${data}
      <span className="text-sm text-gray-600">/gece</span>
    </p>
  );
};

export default Price;
