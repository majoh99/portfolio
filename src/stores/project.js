import { defineStore } from "pinia";
import { ref } from "vue";
import {
  collection,
  query,
  getDocs,
  getDoc,
  where,
  doc,
  Firestore,
} from "firebase/firestore/lite";
import { db } from "../boot/firebase";

export const useProjects = defineStore("project", {
  state: () => ({
    proyectos: ref([]),
    proyecto: ref([]),
  }),
  getters: {
    // getProject: (state) => {
    //   return (id) => state.proyectos.filter((project) => project.id === id);
    // },
  },
  actions: {
    async projectList() {
      if (this.proyectos.length > 1) {
        return;
      }
      try {
        const dbProject = await getDocs(collection(db, "project"));
        dbProject.forEach((doc) => {
          let proyecto = doc.data();
          proyecto.id = doc.id;
          this.proyectos.push(proyecto);
        });
      } catch (error) {
        console.log(error);
      }
    },

    async getProject(id) {
      if (this.proyecto.length > 1) {
        proyecto = [];
        return;
      }
      try {
        const q = doc(db, "project", id);

        const docSnap = await getDoc(q);
        this.proyecto = docSnap.data();
        /* const q = query(collection(db, "project"), where("__name__", "==", id));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let pro = doc.data();
          pro.id = doc.id;
          this.proyecto = pro;
        }); */
      } catch (error) {
        console.log(error);
      }
    },

    openProject(id) {
      this.router.push({ name: "project", params: { id: id } });
    },
  },
});
