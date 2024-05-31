import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MarketPrice = () => {
  const items = [
    {
      title: 'Gold 22k/1g',
      price: '5810',
      icon: 'gold',
    },
    {
      title: 'Silver 1g',
      price: '99',
      icon: 'silverware-clean',
    },
    {
      title: 'Platinum 1g',
      price: '2832',
      icon: 'diamond',
    },
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <View style={styles.container}>
      <SelectDropdown
        data={items}
        defaultValue={selectedItem}
        onSelect={(selectedItem, index) => {
          setSelectedItem(selectedItem);
          console.log(selectedItem, index);
        }}
        renderButton={(selectedItem, isOpen) => (
          <View style={styles.dropdownButtonStyle}>
            {selectedItem && (
              <Icon
                name={selectedItem.icon}
                style={styles.dropdownButtonIconStyle}
              />
            )}
            <Text style={styles.dropdownButtonTxtStyle}>
              {selectedItem
                ? `${selectedItem.title} Rs ${selectedItem.price}`
                : 'Select an item'}
            </Text>
            <Icon
              name={isOpen ? 'chevron-up' : 'chevron-down'}
              style={styles.dropdownButtonArrowStyle}
            />
          </View>
        )}
        renderItem={(item, index, isSelected) => (
          <View
            style={[
              styles.dropdownItemStyle,
              isSelected && styles.dropdownItemSelectedStyle,
            ]}>
            <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
            <Text style={styles.dropdownItemTxtStyle}>
              {`${item.title} Rs ${item.price}`}
            </Text>
          </View>
        )}
        dropdownStyle={styles.dropdownMenuStyle}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.iconWrapper}>
        <Icon name="google-maps" size={30} style={styles.additionalIcon} />
        <Icon name="calendar-month" size={30} style={styles.additionalIcon} />
      </View>
    </View>
  );
};

export default MarketPrice;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#FDF2F2',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownButtonStyle: {
    width: '50%',
    height: 40,
    backgroundColor: '#FDF2F2',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 20,
  },
  dropdownButtonTxtStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5C1A1A',
    marginLeft: 10,
  },
  dropdownButtonArrowStyle: {
    fontSize: 24,
    color: '#5C1A1A',
  },
  dropdownButtonIconStyle: {
    fontSize: 24,
    color: '#5C1A1A',
  },
  dropdownMenuStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 4,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 4,
  },
  dropdownItemSelectedStyle: {
    backgroundColor: '#f0f0f0',
  },
  dropdownItemTxtStyle: {
    fontSize: 16,
    color: '#5C1A1A',
    marginLeft: 10,
  },
  dropdownItemIconStyle: {
    fontSize: 24,
    color: '#5C1A1A',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
  },
  additionalIcon: {
    marginRight: 10,
  },
});
