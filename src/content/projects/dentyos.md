---
title: "Dentyos, software de gestión para consultorios odontológicos"
description: "Aplicación web para que los consultorios dentales lleven agenda, pacientes, historia clínica con odontograma, presupuestos y pagos en dólares y bolívares desde un solo lugar."
image: "images/projects/dentyos/banner_dentyos.webp"
tags: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"]
category: "plataformas"
date: 2026-11-12
link: "https://dentyos.com"
gallery:
  - "images/projects/dentyos/inicio_dentyos.webp"
  - "images/projects/dentyos/agenda_dentyos.webp"
  - "images/projects/dentyos/odontograma_dentyos.webp"
  - "images/projects/dentyos/movil_dentyos.webp"
---

Dentyos es un producto propio que diseñé y desarrollé de principio a fin para resolver el día a día de un consultorio odontológico en Venezuela: organizar las citas, conocer al paciente y cobrar sin perderse entre cuadernos, hojas de cálculo y mensajes sueltos.

La aplicación reúne en un solo lugar:

- **Agenda** por día, semana, mes y lista, con recordatorios para enviar por WhatsApp.
- **Pacientes e historia clínica**, con anamnesis y un odontograma interactivo que se puede exportar en PDF con la marca del consultorio.
- **Presupuestos, pagos y finanzas** en dólares y bolívares, con la tasa de cambio visible en todo momento.
- **Reportes** con gráficas de ingresos y actividad, además de la gestión del equipo y sus permisos por rol.

Está construida como un monorepo con una web en Next.js, una API independiente en NestJS y PostgreSQL con Prisma. Funciona como PWA y se adapta a teléfono y tableta, con una copia cifrada local que permite consultar la información y seguir trabajando cuando la conexión falla.

Trabajé con un enfoque guiado por especificaciones: cada funcionalidad parte de un documento con alcance, exclusiones y criterios de finalización, y se valida con pruebas y comprobaciones automáticas antes de unirse. También mantengo un sistema de componentes propio para que la interfaz sea coherente en todos los módulos.

Las capturas usan un consultorio ficticio con datos inventados.
