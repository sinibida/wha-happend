// @ts-expect-error Works well on practice! (i guess: https://stackoverflow.com/a/74372128)
import {version} from '/package.json';

export default function getVersion() {
  return version;
}
