class Spinner {
  handleClear() {
    ROOT_SPINNER.innerHTML = "";
  }

  render() {
    const html = `<div class="spinner-container">
    <img class ="spinner-image" src="components/Spinner/img/spinner.svg" alt="spinner" />
    </div>
 `;

    ROOT_SPINNER.innerHTML = html;
  }
}

const spinnerPage = new Spinner();
