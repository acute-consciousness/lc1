import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {
  Canvas,
  Image,
  Group,
  useImage,
  rect,
  rrect,
  FilterMode,
  MipmapMode,
} from '@shopify/react-native-skia';
import { Ionicons } from '@expo/vector-icons'; // swap for your icon library if not on Expo
import { Colours } from '../looks/Colours';

const Post = ({
  author,
  date,
  title,
  imageUri,
  likes,
  onPress,
  onLike,
  onComment,
  onSave,
  onShare,
}) => {
  const { width: screenWidth } = useWindowDimensions();
  const image = useImage(imageUri);

  const sidePadding = 16;
  const width = screenWidth - sidePadding * 2;
  const height = width * 0.5;
  const radius = 12;

  const roundedClip = rrect(rect(0, 0, width, height), radius, radius);

  return (
    <TouchableOpacity
      style={styles.post}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar} />

         {/**username */}
        <View style={styles.headerText}>
          <Text style={styles.author}>username</Text>
        </View>

        {/**Date */}
          <Text style={styles.join}>10 sept</Text>


      </View>


      {/* Image with rounded corners.
          pointerEvents="none" lets taps pass through the Canvas to the TouchableOpacity */}
      <View pointerEvents="none">
        <Canvas style={{ width, height }}>
          <Group clip={roundedClip}>
            <Image
              image={image}
              fit="cover"
              x={0}
              y={0}
              width={width}
              height={height}
              sampling={{ filter: FilterMode.Linear, mipmap: MipmapMode.Linear }}
            />
          </Group>
        </Canvas>
      </View>

      {/*Title*/}
      <Text style={styles.title}>Title</Text>

      {/* Reactions row */}
      <View style={styles.actions}>
        <View style={styles.reactors}>
          <View style={[styles.miniAvatar, { backgroundColor: '#e8a33d' }]} />
          <View style={[styles.miniAvatar, styles.overlap, { backgroundColor: '#6aa84f' }]} />
          <View style={[styles.miniAvatar, styles.overlap, { backgroundColor: '#e06666' }]} />
          <Text style={styles.count}>{likes}</Text>
        </View>

        <View style={styles.icons}>
          <TouchableOpacity hitSlop={10} onPress={onLike}>
            <Ionicons name="heart-outline" size={22} color={Colours.blacks.bitMOreTwo} />
          </TouchableOpacity>
          <TouchableOpacity hitSlop={10} onPress={onComment}>
            <Ionicons name="chatbubble-outline" size={20} color={Colours.blacks.bitMOreTwo} />
          </TouchableOpacity>
          <TouchableOpacity hitSlop={10} onPress={onSave}>
            <Ionicons name="bookmark-outline" size={20} color={Colours.blacks.bitMOreTwo} />
          </TouchableOpacity>
          <TouchableOpacity hitSlop={10} onPress={onShare}>
            <Ionicons name="share-social" size={20} color={Colours.blacks.bitMOreTwo} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Messages = () => {
  return (
    <ScrollView style={styles.screen}>
      <Post
        author="paint soup"
        date="10 Sept"
        title="goal post"
        imageUri="https://i.postimg.cc/MGHr0kvL/goal-post.jpg"
        likes={60}
        onPress={() => console.log('post pressed')}
        onLike={() => console.log('like')}
        onComment={() => console.log('comment')}
        onSave={() => console.log('save')}
        onShare={() => console.log('share')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colours.creeamish.fromCH,
  },
  post: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e8a33d',
  },
  headerText: {
    flex: 1,
    marginLeft: 12,
  },
  author: {
    fontSize: 16,
    fontWeight: '700',
    color: Colours.blacks.bitMOreTwo,
  },
  date: {
    fontSize: 14,
    color: '#777',
  },
  join: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a6fa8',
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colours.blacks.bitMOreTwo,
    marginTop: 12,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  reactors: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colours.creeamish.fromCH,
  },
  overlap: {
    marginLeft: -8,
  },
  count: {
    marginLeft: 8,
    fontSize: 16,
    color: Colours.blacks.bitMOreTwo,
  },
  icons: {
    flexDirection: 'row',
    gap: 20,
  },
});

export default Messages;