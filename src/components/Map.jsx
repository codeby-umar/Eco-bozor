import React from "react";

function Map() {
  return (
    <div className="h-screen">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24213.344270028414!2d72.57671355!3d40.65924755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcf97be78a54d3%3A0x3835f29d93f1ae!2sKhodjaobad%2C%20Andijan%20region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1772349322744!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;