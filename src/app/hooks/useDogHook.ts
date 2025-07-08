import { useSnackbarStore } from "../store/snackbarStore";
import { useState, useCallback } from "react";
import { CreateDogRequest, DogService } from "../data/remote/dog/service";
import DogModel from "../model/dog_model";

export function useDogHook() {
  const [dogs, setDogs] = useState<DogModel[]>([]);
  const [loading, setLoading] = useState(false);
  const { showSnackbar } = useSnackbarStore();

  const fetchDogs = useCallback(async () => {
    setLoading(true);
    try {
      const response = await DogService.getAll();
      setDogs(response);
    } catch (error) {
      showSnackbar("Erro ao buscar cães", "error");
    } finally {
      setLoading(false);
    }
  }, [showSnackbar]);

  const uploadImage = useCallback(
    async (id: number, image: File) => {
      try {
        await DogService.uploadDogImage(id, image);
        showSnackbar("Imagem enviada com sucesso!", "success");
      } catch (err) {
        showSnackbar("Erro ao enviar imagem", "error");
        console.error("Erro ao fazer upload:", err);
      }
    },
    [showSnackbar]
  );

  const updateDog = useCallback(
    async (data: DogModel) => {
      setLoading(true);
      try {
        const updatedDog = await DogService.updateDog(data);
        setDogs((prev) =>
          prev.map((dog) => (dog.id === data.id ? updatedDog : dog))
        );
        showSnackbar("Cão atualizado com sucesso!", "success");
      } catch (err) {
        showSnackbar("Erro ao atualizar cão", "error");
        console.error("Erro ao atualizar:", err);
      } finally {
        setLoading(false);
      }
    },
    [showSnackbar]
  );

  const createDog = useCallback(
    async (data: CreateDogRequest) => {
      setLoading(true);
      try {
        const newDog = await DogService.createDog(data);
        setDogs((prev) => [...prev, newDog]); // Adiciona localmente
        showSnackbar("Cão cadastrado com sucesso!", "success");
      } catch (err) {
        showSnackbar(`Erro ao cadastrar cão: ${err}`, "error");
        console.error("Erro ao cadastrar:", err);
      } finally {
        setLoading(false);
      }
    },
    [showSnackbar]
  );

  const deleteDog = useCallback(
    async (id: number) => {
      try {
        await DogService.deleteDog(id);
        setDogs((prev) => prev.filter((d) => d.id !== id)); // Remove localmente
        showSnackbar("Cão removido com sucesso!", "success");
      } catch (err) {
        showSnackbar("Erro ao remover cão", "error");
        console.error(err);
      }
    },
    [showSnackbar]
  );

  return {
    dogs,
    fetchDogs,
    createDog,
    deleteDog,
    loading,
    updateDog,
    uploadImage,
  };
}
