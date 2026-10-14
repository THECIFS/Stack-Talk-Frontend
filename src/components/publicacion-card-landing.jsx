import '../styles/publicacion-card-landing.css'
export default function PublicacionCardLanding(props) {
    return (
        <div className="ui-align-items-center-background-color-hex-23b488-display-flex-flex-shrink-0-gap-25-5e46d8">
            <div className="ui-flex-shrink-0-height-150px-width-150px-c3f4ae">
                <img
                    className="ui-border-radius-10px-height-100percent-width-100percent-bb8c87"
                    src={props?.src} alt={props?.alt} />
            </div>
            <div className="ui-display-flex-flex-direction-column-height-150px-justify-content-space-between-width-300px-08b430">
                <h1 className="ui-color-white-font-size-24px-margin-0-a71c92">{props?.titulo}</h1>
                <p className="ui-color-white-font-size-12px-margin-0-bb6f33">{props?.descripcion}</p>
                <div className="ui-display-flex-gap-10px-justify-content-end-c1f6de">
                    <div className="ui-align-items-center-display-flex-gap-5px-justify-content-center-9b06b7">
                        <p>{props?.likes}</p>
                        <div className="ui-height-32px-width-32px-2c978a"><img className="ui-background-color-white-border-radius-5px-height-100percent-width-100percent-db3a1c" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRodW1icy11cCBwcmV2aWV3LWljb24iPjxwYXRoIGQ9Ik0xNSA1Ljg4IDE0IDEwaDUuODNhMiAyIDAgMCAxIDEuOTIgMi41NmwtMi4zMyA4QTIgMiAwIDAgMSAxNy41IDIySDRhMiAyIDAgMCAxLTItMnYtOGEyIDIgMCAwIDEgMi0yaDIuNzZhMiAyIDAgMCAwIDEuNzktMS4xMUwxMiAyYTMuMTMgMy4xMyAwIDAgMSAzIDMuODhaIi8+PHBhdGggZD0iTTcgMTB2MTIiLz48L3N2Zz4=" /></div>
                    </div>
                    <div className="ui-align-items-center-display-flex-gap-5px-justify-content-center-9b06b7">                        <p>{props?.comentarios}</p>
                        <div className="ui-height-32px-width-32px-2c978a"><img className="ui-background-color-white-border-radius-5px-height-100percent-width-100percent-db3a1c" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lc3NhZ2UtY2lyY2xlIHByZXZpZXctaWNvbiI+PHBhdGggZD0iTTIuOTkyIDE2LjM0MmEyIDIgMCAwIDEgLjA5NCAxLjE2N2wtMS4wNjUgMy4yOWExIDEgMCAwIDAgMS4yMzYgMS4xNjhsMy40MTMtLjk5OGEyIDIgMCAwIDEgMS4wOTkuMDkyIDEwIDEwIDAgMSAwLTQuNzc3LTQuNzE5Ii8+PC9zdmc+" /></div>
                    </div>
                    <div className="ui-align-items-center-display-flex-gap-5px-justify-content-center-9b06b7">                        <p>{props?.visualizaciones}</p>
                        <div className="ui-height-32px-width-32px-2c978a"><img className="ui-background-color-white-border-radius-5px-height-100percent-width-100percent-db3a1c" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWV5ZSBwcmV2aWV3LWljb24iPjxwYXRoIGQ9Ik0yLjA2MiAxMi4zNDhhMSAxIDAgMCAxIDAtLjY5NiAxMC43NSAxMC43NSAwIDAgMSAxOS44NzYgMCAxIDEgMCAwIDEgMCAuNjk2IDEwLjc1IDEwLjc1IDAgMCAxLTE5Ljg3NiAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIvPjwvc3ZnPg==" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}