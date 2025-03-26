var log = console.log;

export default function bs_list(haystack: number[], needle: number): boolean {
    log(`----- Searching for needle: ${needle} -------`);
    let idx_low = 0;
    let idx_hi = haystack.length - 1;
    do {
        const idx_mid = idx_low + Math.floor((idx_hi - idx_low) / 2);
        const val_mid = haystack[idx_mid];
        log(`[low, high] :: mid --> [${haystack[idx_low]}, ${haystack[idx_hi]}] :: ${val_mid}`);
      
        if (needle === val_mid) {
            // found the needle!
            log('Returning true.');
            return true;
        } else if (needle < val_mid) {
            // needle is smaller...inspect left half
            idx_hi = idx_mid - 1; // left of mid becomes the new "high"
            continue;
        } else {
            // needle is larger...inspect right half
            idx_low = idx_mid + 1; // right of mid becomes the new "low"
            continue;
        }
    } while (idx_low <= idx_hi);
    // we've exhausted all options in the array without a match.
    log('Returning false.')
    return false;
}
