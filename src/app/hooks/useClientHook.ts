import { useState, useCallback } from "react";
import { useSnackbarStore } from "../store/snackbarStore";
import { Client } from "../model/dog_model";
import { DogService } from "../data/remote/dog/service";

export function useClientHook() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);
  const { showSnackbar } = useSnackbarStore();

  const fetchClients = useCallback(async () => {
    setLoading(true);
    try {
      const response = await DogService.getAllClients();
      setClients(response);
    } catch (error) {
      showSnackbar("Erro ao buscar clientes", "error");
      console.error("Erro ao buscar clientes:", error);
    } finally {
      setLoading(false);
    }
  }, [showSnackbar]);

  return {
    clients,
    fetchClients,
    loading,
  };
}
