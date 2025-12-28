const ScrollToTop = () => {
  return (
    <button className="progress-wrap" aria-label="scroll indicator" title="back to top">
      <span></span>
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </button>
  );
};

export default ScrollToTop;

