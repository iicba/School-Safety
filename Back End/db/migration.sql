DROP DATABASE IF EXISTS reports_db;

CREATE DATABASE reports_db;

\c reports_db;

DROP TABLE IF EXISTS submitter;
DROP TABLE IF EXISTS incident;
DROP TABLE IF EXISTS plates;

CREATE TABLE submitter(
   id SERIAL PRIMARY KEY NOT NULL,
   "name" TEXT NOT NULL,
   email TEXT NOT NULL
);

CREATE TABLE incident(
   incident_id SERIAL PRIMARY KEY NOT NULL,
   state TEXT NOT NULL,
   plateNum TEXT NOT NULL,
   violation TEXT NOT NULL
);

CREATE TABLE plates(
   plate_id SERIAL PRIMARY KEY NOT NULL,
   state TEXT NOT NULL,
   plateNum TEXT NOT NULL
);
