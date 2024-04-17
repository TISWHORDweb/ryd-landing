
export default function Survey() {
    const style = {
        maxWidth: '640px',
        minWidth: '100%',
        width: '100%',
        height: '1367px',
        border: 'none',
        padding: 0,
    }

    return (
      <div style={{ margin: 'auto'}}>
          <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSfDsC7xszuy-M2gpX2I8PnHi9feZl_HxdfAIQ1TVCGG9zVfDA/viewform?embedded=true"
          style={style}>
              Loading…
          </iframe>
      </div>
    )
  }