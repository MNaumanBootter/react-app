import apiClient, { ApiClientResponse } from "./api-client";

interface Entity {
  id: number;
}

class HttpService<T extends Entity> {
  readonly endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(): {
    request: Promise<ApiClientResponse<T[]>>;
    cancel: () => void;
  } {
    const controller = new AbortController();

    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  create(entity: Omit<T, "id">): Promise<ApiClientResponse<T>> {
    return apiClient.post<T>(this.endpoint, entity);
  }

  update(entity: T): Promise<ApiClientResponse<T>> {
    return apiClient.patch<T>(`${this.endpoint}/${entity.id}`, entity);
  }

  delete(id: number): Promise<ApiClientResponse<void>> {
    return apiClient.delete<void>(`${this.endpoint}/${id}`);
  }
}

const create = <T extends Entity>(endpoint: string): HttpService<T> =>
  new HttpService<T>(endpoint);

export default create;
