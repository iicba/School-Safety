INSERT INTO submitter (NAME,email) VALUES ('Alice', 'Alice@gmail.com' );
INSERT INTO submitter (NAME,email) VALUES ('Bob', 'Bob@gmail.com' );

INSERT INTO incident (state, plateNum, violation) VALUES ('Maryland', 'GF 1029', 'Speeding' );
INSERT INTO incident (state, plateNum, violation) VALUES ('DC', 'ZZ 1234', 'Speeding' );

INSERT INTO plates (state, plateNum) VALUES ('Maryland', 'GF 1029');
INSERT INTO plates (state, plateNum) VALUES ('DC', 'ZZ 1234');