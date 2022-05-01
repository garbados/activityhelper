module.exports = function (API) {
  class CipherAlgorithm extends API.BaseProperty { /* TODO */ }
  class CipherData extends API.BaseProperty { /* TODO */ }
  class DigestAlgorithm extends API.BaseProperty { /* TODO */ }
  class DigestValue extends API.BaseProperty { /* TODO */ }
  class CipherKey extends API.BaseProperty { /* TODO */ }
  class BlockchainAccountId extends API.BaseProperty { /* TODO */ }
  class EthereumAddress extends API.BaseProperty { /* TODO */ }
  class Expires extends API.BaseProperty { /* TODO */ }
  class InitializationVector extends API.BaseProperty { /* TODO */ }
  class Nonce extends API.BaseProperty { /* TODO */ }
  class CanonicalizationAlgorithm extends API.BaseProperty { /* TODO */ }
  class Owner extends API.BaseProperty { /* TODO */ }
  class Password extends API.BaseProperty { /* TODO */ }
  class PrivateKeyPem extends API.BaseProperty { /* TODO */ }
  class VerificationMethod extends API.BaseProperty { /* TODO */ }
  class PublicKey extends API.BaseProperty { /* TODO */ }
  class AssertionMethod extends API.BaseProperty { /* TODO */ }
  class Authentication extends API.BaseProperty { /* TODO */ }
  class CapabilityDelegation extends API.BaseProperty { /* TODO */ }
  class CapabilityInvocation extends API.BaseProperty { /* TODO */ }
  class KeyAgreement extends API.BaseProperty { /* TODO */ }
  class PublicKeyBase58 extends API.BaseProperty { /* TODO */ }
  class PublicKeyJwk extends API.BaseProperty { /* TODO */ }
  class PublicKeyPem extends API.BaseProperty { /* TODO */ }
  class PublicKeyHex extends API.BaseProperty { /* TODO */ }
  class PublicKeyMultibase extends API.BaseProperty { /* TODO */ }
  class PublicKeyService extends API.BaseProperty { /* TODO */ }
  class Revoked extends API.BaseProperty { /* TODO */ }
  class Proof extends API.BaseProperty { /* TODO */ }
  class Jws extends API.BaseProperty { /* TODO */ }
  class ProofPurpose extends API.BaseProperty { /* TODO */ }
  class Challenge extends API.BaseProperty { /* TODO */ }
  class Domain extends API.BaseProperty { /* TODO */ }
  class ExpirationDate extends API.BaseProperty { /* TODO */ }
  class ProofValue extends API.BaseProperty { /* TODO */ }
  class Signature extends API.BaseProperty { /* TODO */ }
  class SignatureValue extends API.BaseProperty { /* TODO */ }
  class SignatureAlgorithm extends API.BaseProperty { /* TODO */ }
  class Service extends API.BaseProperty { /* TODO */ }
  class ServiceEndpoint extends API.BaseProperty { /* TODO */ }
  class X509CertificateChain extends API.BaseProperty { /* TODO */ }
  class X509CertificateFingerprint extends API.BaseProperty { /* TODO */ }
  class AllowedAction extends API.BaseProperty { /* TODO */ }
  class Capability extends API.BaseProperty { /* TODO */ }
  class CapabilityAction extends API.BaseProperty { /* TODO */ }
  class CapabilityChain extends API.BaseProperty { /* TODO */ }
  class Caveat extends API.BaseProperty { /* TODO */ }
  class Delegator extends API.BaseProperty { /* TODO */ }
  class InvocationTarget extends API.BaseProperty { /* TODO */ }
  class Invoker extends API.BaseProperty { /* TODO */ }

  const properties = [
    CipherAlgorithm,
    CipherData,
    DigestAlgorithm,
    DigestValue,
    CipherKey,
    BlockchainAccountId,
    EthereumAddress,
    Expires,
    InitializationVector,
    Nonce,
    CanonicalizationAlgorithm,
    Owner,
    Password,
    PrivateKeyPem,
    VerificationMethod,
    PublicKey,
    AssertionMethod,
    Authentication,
    CapabilityDelegation,
    CapabilityInvocation,
    KeyAgreement,
    PublicKeyBase58,
    PublicKeyJwk,
    PublicKeyPem,
    PublicKeyHex,
    PublicKeyMultibase,
    PublicKeyService,
    Revoked,
    Proof,
    Jws,
    ProofPurpose,
    Challenge,
    Domain,
    ExpirationDate,
    ProofValue,
    Signature,
    SignatureValue,
    SignatureAlgorithm,
    Service,
    ServiceEndpoint,
    X509CertificateChain,
    X509CertificateFingerprint,
    AllowedAction,
    Capability,
    CapabilityAction,
    CapabilityChain,
    Caveat,
    Delegator,
    InvocationTarget,
    Invoker
  ]

  for (const Property of properties) {
    API.addProperty(Property)
  }

  class EcdsaSecp256k1Signature2019 extends API.models.Object { /* TODO */ }
  class EcdsaSecp256k1RecoverySignature2020 extends API.models.Object { /* TODO */ }
  class EcdsaSecp256k1VerificationKey2019 extends API.models.Object { /* TODO */ }
  class EcdsaSecp256k1RecoveryMethod2020 extends API.models.Object { /* TODO */ }
  class RsaSignature2018 extends API.models.Object { /* TODO */ }
  class RsaVerificationKey2018 extends API.models.Object { /* TODO */ }
  class SchnorrSecp256k1Signature2019 extends API.models.Object { /* TODO */ }
  class SchnorrSecp256k1VerificationKey2019 extends API.models.Object { /* TODO */ }
  class ServiceEndpointProxyService extends API.models.Object { /* TODO */ }
  class Digest extends API.models.Object { /* TODO */ }
  class EncryptedMessage extends API.models.Object { /* TODO */ }
  class GraphSignature2012 extends API.models.Object { /* TODO */ }
  class LinkedDataSignature2015 extends API.models.Object { /* TODO */ }
  class LinkedDataSignature2016 extends API.models.Object { /* TODO */ }
  class MerkleProof2019 extends API.models.Object { /* TODO */ }
  class X25519KeyAgreementKey2019 extends API.models.Object { /* TODO */ }
  class Ed25519VerificationKey2018 extends API.models.Object { /* TODO */ }
  class Ed25519Signature2018 extends API.models.Object { /* TODO */ }
  class Ed25519VerificationKey2020 extends API.models.Object { /* TODO */ }
  class Ed25519Signature2020 extends API.models.Object { /* TODO */ }
  class JsonWebKey2020 extends API.models.Object { /* TODO */ }
  class JsonWebSignature2020 extends API.models.Object { /* TODO */ }
  class BbsBlsSignature2020 extends API.models.Object { /* TODO */ }
  class BbsBlsSignatureProof2020 extends API.models.Object { /* TODO */ }
  class Bls12381G1Key2020 extends API.models.Object { /* TODO */ }
  class Bls12381G2Key2020 extends API.models.Object { /* TODO */ }
  class Key extends API.models.Object { /* TODO */ }
  class SignatureModel extends API.models.Object {
    static type = 'Signature'
    // TODO
  }

  const models = [
    EcdsaSecp256k1Signature2019,
    EcdsaSecp256k1RecoverySignature2020,
    EcdsaSecp256k1VerificationKey2019,
    EcdsaSecp256k1RecoveryMethod2020,
    RsaSignature2018,
    RsaVerificationKey2018,
    SchnorrSecp256k1Signature2019,
    SchnorrSecp256k1VerificationKey2019,
    ServiceEndpointProxyService,
    Digest,
    EncryptedMessage,
    GraphSignature2012,
    LinkedDataSignature2015,
    LinkedDataSignature2016,
    MerkleProof2019,
    X25519KeyAgreementKey2019,
    Ed25519VerificationKey2018,
    Ed25519Signature2018,
    Ed25519VerificationKey2020,
    Ed25519Signature2020,
    JsonWebKey2020,
    JsonWebSignature2020,
    BbsBlsSignature2020,
    BbsBlsSignatureProof2020,
    Bls12381G1Key2020,
    Bls12381G2Key2020,
    Key,
    SignatureModel
  ]

  for (const Model of models) {
    API.addModel(Model)
  }

  API.addContext('https://w3id.org/security/v1', { models, properties })
}
