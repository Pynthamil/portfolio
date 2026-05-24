export default function Loading() {
  return (
    <div className="premium-loader-wrapper">
      <div className="premium-loader-glow" />
      <div className="premium-loader-content">
        <div className="premium-loader-ring-container">
          <div className="premium-loader-ring-outer" />
          <div className="premium-loader-ring-inner" />
          <span className="premium-loader-monogram">P</span>
        </div>
        <p className="premium-loader-text">Loading</p>
      </div>
    </div>
  );
}
