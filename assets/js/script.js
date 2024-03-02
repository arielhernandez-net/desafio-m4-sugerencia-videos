(function () {
    const setIframePrivate = (url, id) => {
        const iframeElement = document.getElementById(id);
        iframeElement.setAttribute("src", url);
    };

    class Multimedia {
        constructor(url) {
            this._url = url;
        }

        get url() {
            return this._url;
        }

        set url(nuevaUrl) {
            if (!nuevaUrl.startsWith("http")) {
                throw new Error("La URL debe comenzar con http o https");
            }
            this._url = nuevaUrl;
        }

        setInicio(tiempoVideo) {
            this.url = `${this.url}?start=${tiempoVideo}`;
        }
    }

    class Reproductor extends Multimedia {
        constructor(url, id) {
            super(url);
            this._id = id;
        }

        get id() {
            return this._id;
        }

        set id(nuevaId) {
            this._id = nuevaId;
        }

        playMultimedia() {
            setIframePrivate(this.url, this.id);
        }
    }

    const musica = new Reproductor(
        "https://www.youtube.com/embed/I-1oJnmr6nk",
        "musica"
    );
    musica.playMultimedia();
    musica.setInicio(20);

    const peliculas = new Reproductor(
        "https://www.youtube.com/embed/L0anWmmd8TI",
        "peliculas"
    );
    peliculas.playMultimedia();
    peliculas.setInicio(150);

    const series = new Reproductor(
        "https://www.youtube.com/embed/s9APLXM9Ei8",
        "series"
    );
    series.playMultimedia();
    reproductorSeries.setInicio(130);
    
})();
