import API_CONFIG from "../utils/config";
import $ from "jquery";

const API_URL = API_CONFIG.baseUrl;

export class Behance {
  getProjectsByUser() {
    return $.ajax({
      url: `${API_URL}${API_CONFIG.entryPoint.user}/${API_CONFIG.userName}${API_CONFIG.entryPoint.project}?${API_CONFIG.apiKey}`,
      method: "GET",
      dataType: "jsonp",
    });
  }

  getProjectById(id) {
    // Remarque : renommer getProjectsById -> getProjectById pour coller au composant
    return $.ajax({
      url: `${API_URL}${API_CONFIG.entryPoint.project}/${id}?${API_CONFIG.apiKey}`,
      method: "GET",
      dataType: "jsonp",
    });
  }
}
