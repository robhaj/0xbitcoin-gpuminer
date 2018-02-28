#ifndef __KECCAK256_H__
#define __KECCAK256_H__

extern "C" void keccak256_hash(void *state, const void *input);

extern "C" int scanhash_keccak256(int thr_id, uint32_t *pdata,
                                  const uint32_t *ptarget, uint32_t max_nonce,
                                  unsigned long *hashes_done);

//extern "C" void keccak256_cpu_init(int thr_id, uint32_t threads);
//extern "C" void keccak256_setBlock_80(void *pdata,const uint64_t *ptarget);
//extern "C" void keccak256_cpu_hash_80(int thr_id, uint32_t threads, uint32_t startNounce, uint32_t *h_nounce);

#endif /* __KECCAK256_H__ */
