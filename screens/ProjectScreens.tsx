// ProjectsScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from 'expo-linear-gradient';

type Project = {
  id: string;
  title: string;
  dueDate: string;
  status: 'Activo' | 'Terminado';
};

export default function ProjectsScreen() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [title, setTitle] = useState<string>('');
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title,
      dueDate: dueDate.toLocaleDateString(),
      status: 'Activo',
    };
    setProjects([...projects, newProject]);
    setTitle('');
    setDueDate(new Date());
  };

  const markAsFinished = (id: string) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, status: 'Terminado' } : project
      )
    );
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <LinearGradient
      colors={['#68c3ee', '#4f65de']} // Degradado de azul claro a azul marino
      style={styles.container}
    >
      <TextInput
        placeholder="Nombre del proyecto"
        placeholderTextColor="#FFF"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateText}>{dueDate.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dueDate}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowDatePicker(false);
            date && setDueDate(date);
          }}
        />
      )}

      {/* Botón Agregar Proyecto */}
      <TouchableOpacity style={[styles.button, styles.addButton]} onPress={addProject}>
        <Text style={styles.addButtonText}>Agregar Proyecto</Text>
      </TouchableOpacity>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.projectItem}>
            <Text style={styles.projectText}>{item.title} - {item.dueDate}</Text>
            <Text style={styles.projectText}>Estatus: {item.status}</Text>

            {item.status === 'Activo' && (
              <TouchableOpacity style={[styles.button, styles.finishButton]} onPress={() => markAsFinished(item.id)}>
                <Text style={styles.finishButtonText}>Terminar</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={() => deleteProject(item.id)}>
              <Text style={styles.deleteButtonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    color: '#FFF',
    marginBottom: 10,
  },
  dateText: {
    color: '#FFF',
    marginBottom: 10,
  },
  projectItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
  projectText: {
    color: '#FFF',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: '#000', // Fondo negro para el botón de agregar
  },
  addButtonText: {
    color: '#FFF', // Texto blanco para el botón de agregar
  },
  finishButton: {
    backgroundColor: '#FFF', // Fondo blanco para el botón de terminar
  },
  finishButtonText: {
    color: '#000', // Texto negro para el botón de terminar
  },
  deleteButton: {
    backgroundColor: '#000', // Fondo negro para el botón de eliminar
  },
  deleteButtonText: {
    color: '#FFF', // Texto blanco para el botón de eliminar
  },
});
