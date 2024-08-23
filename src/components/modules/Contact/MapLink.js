const MapLink = () => {
  return (
    <div><div className="contact padding-bottom">
    <div className="container aos-init" data-aos="fade-up" data-aos-duration="800">
        <div className="contact__map">
            <div className="mapouter">
                <div className="gmap_canvas"><iframe id="gmap_canvas" className="map"
                        src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default MapLink