import Link from 'next/link';

export default function PageHeader({ image, title, subtitle }) {
  return (
    <div className="pageheader" style = {{ backgroundImage: `url(${image})` }}>
      {image && (
        <div className="container">
          <div className="pageheader__content">
            <h2>{title}</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {subtitle}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
