import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatfroms from "../Hooks/usePlatforms";
import { Platform } from "../Hooks/Types";


interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
  const {data, error} = usePlatfroms();

  if(error) return null;

  return (
    <Menu>
      <MenuButton marginX="20px" as={Button} rightIcon={<BsChevronDown />}>
       {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector
