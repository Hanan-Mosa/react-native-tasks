import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { FilterationTypes, updateFilterType } from '../../Redux/Slices/todo_slice';
import { styles} from '../../styles';
import { TouchableOpacity } from 'react-native';

const Filteration = () => {
    const {filter,todos} = useSelector((state)=>state.todosState);
    const dispatch = useDispatch();
    if(todos.length ===0) return null;
      const handleFilterChange = (filter) => {
        dispatch(updateFilterType(filter));
      };
    return (
        <>
            <View style={styles.dividerLine} />
            <View style={styles.filterContainer}>
                
                <TouchableOpacity
                    style={filter === FilterationTypes.ALL ? styles.activeFilterBtn : styles.filterBtn}
                    onPress={() => {
                        handleFilterChange(FilterationTypes.ALL);

                    }}
                >
                    <Text style={filter === FilterationTypes.ALL ? styles.text : styles.filterText}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={filter === FilterationTypes.ACTIVE ? styles.activeFilterBtn : styles.filterBtn}
                    onPress={() => {
                        handleFilterChange(FilterationTypes.ACTIVE);

                    }}
                >
                    <Text style={filter === FilterationTypes.ACTIVE ? styles.text : styles.filterText}>Active</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={filter === FilterationTypes.Done ? styles.activeFilterBtn : { ...styles.filterBtn }}
                    onPress={() => {
                        handleFilterChange(FilterationTypes.Done);

                    }}
                >
                    <Text style={filter === FilterationTypes.Done ? styles.text : styles.filterText}>Done</Text>
                </TouchableOpacity>

            </View> 
            <View style={styles.dividerLine} />
            </>
    )
}

export default Filteration